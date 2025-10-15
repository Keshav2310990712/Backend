const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const { Queue, Worker } = require('bullmq');
let codeQueue = new Queue("code-queue", {
    connection: {
        host: "localhost",
        port: 6379,
    },
});


app.post("/api/submission", async function (req, res) {
    let { qId, code, language } = req.body
    //task offload to message queue , so that a worker can do the task 
    let result = await codeQueue.add("code-queue", {
        qId, code, language
    })
    console.log(result.id);
    console.log(result.data);



    res.json({
        submission: result.id
    })
})

let worker = new Worker("code-queue", (result) => {
    let { qId, code, language } = result.data;
    setTimeout(() => {
        return {
            qId: qId,
            status: success,
            time: "4ms",
            beat: "top 10%"
        }
    }, 5000)
}, {
    connection: {
        host: "localhost",
        port: 6379,
    },
})
worker.on("error", function (err) {
    console.log(err)
})

app.listen(3030, function () {
    console.log("server started");
})
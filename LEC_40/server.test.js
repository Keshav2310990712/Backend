const user = require("./model/user.schema");
const request = require("supertest");
const app = require("./server")
jest.mock("./model/user.schema")
describe("POST /api/users/register",()=>{
    it("should return user already exist if email is keshav@gmail.com",async()=>{
         user.findOne.mockResolvedValueOnce(true);
         let response = await request(app).post("/api/users/register").send({
            name:"keshav",
            email:"keshav@gmail.com",
            password:"1234"
         }) 
         expect(response.body.message).toBe("user already exist")            
    })
    it("should create a new user with email keshav1@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(false);
        user.create.mockResolvedValueOnce({
            name:"keshav",
            email:"keshav1@gmail.com",
            password:"1234"
        })
        let response = await request(app).post("/api/users/register").send({
            name:"keshav",
            email:"keshav1@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("user registered successfully");
        expect(response.body.data).toEqual({
             name:"keshav",
            email:"keshav1@gmail.com",
            password:"1234"
        })
    })
})
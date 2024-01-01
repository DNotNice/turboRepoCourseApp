import type { NextApiRequest , NextApiResponse } from "next";
import { ADMIN } from "db";
import jwt from "jsonwebtoken"
import { ensureDbConnect } from "@/lib/dbConnect";
const SECRET = "akdfljasdklf"

type Data = {
    token?:string ,
    message?:string,
}

export default async  function handler( req: NextApiRequest , res:NextApiResponse<Data> ){
   await ensureDbConnect()
    const { username, password , name} = req.body;
    const admin  = await  ADMIN.findOne({ username }) 
      if (admin) {
        res.status(403).json({ message: 'ADMIN already exists' });
      } else {
        const obj = {name : name , username: username, password: password };
        const  newADMIN = new ADMIN(obj);
        newADMIN.save();
        const token = jwt.sign({ username, role: 'ADMIN' }, SECRET, { expiresIn: '1h' });
        return res.json({ message: 'ADMIN created successfully', token:token });
      }
}
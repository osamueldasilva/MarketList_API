import { Request, Response } from "express";
import { IListMarket } from "../Interface/ListMarket";
import { prisma } from "../Lib";

const express = require('express');

const app = express();

app.use(express.json());

app.post('/listMarket', async (req: Request, res: Response) => {
    console.log(res.status)
    try {
        const { product_name, qtd_product, id } = req.body as IListMarket;

        const newProducts = await prisma.listMarket.create({
            data: {
                product_name,
                qtd_product,
                id
            }
        })
        console.log(newProducts)
        res.json(newProducts);
    } catch (error) {
        console.log("🚀 ~ file: index.tsx:21 ~ app.post ~ error:", error)
    }
})

app.listen(5001, () => console.log('Servsdidor rodando!'))
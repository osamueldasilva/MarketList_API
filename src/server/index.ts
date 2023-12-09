import { Request, Response } from "express";
import { IListMarket } from "../Interface/ListMarket";
import { prisma } from "../Lib";

const express = require('express');

const app = express();

app.use(express.json());

// Rota pra adicionar um item na lista
app.post('/listMarket', async (req: Request, res: Response) => {
    try {
        const { product_name, qtd_product } = req.body as IListMarket;

        const newProducts = await prisma.listMarket.create({
            data: {
                product_name: 'arroz',
                qtd_product: '32',
            }
        })
        res.send(newProducts);
    } catch (error) {
        console.log("🚀 ~ file: index.tsx:21 ~ app.post ~ error:", error)
    }
})

// Rota pra pegar a lista completa
app.get('/listMarket', async (req: Request, res: Response) => {
    try {
        const listMarket = await prisma.listMarket.findMany()

        res.send(listMarket)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:31 ~ app.get ~ error:", error)
    }
})

// Rota pra pegar um item da lista
app.get('/listMarket/:id', async (req: Request, res: Response) => {
    try {
        const idProduct = Number(req.params.id)

        const productsId = await prisma.listMarket.findUnique({
            where: {
                id: idProduct
            },
        })
        res.json(productsId)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:50 ~ app.get ~ error:", error)
    }
})

// Rota pra deletar a lista completa
app.delete('/listMarket', async (req: Request, res: Response) => {
    try {
        const listMarket = await prisma.listMarket.deleteMany({})
        res.send(listMarket)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:63 ~ app.delete ~ error:", error)
    }
})

// Rota pra deletar apenas um item da lista
app.delete('/listMarket/:id', async (req: Request, res: Response) => {
    try {
        const listDeleteId = Number(req.params.id)

        const listMarket = await prisma.listMarket.delete({
            where: {
                id: listDeleteId
            }
        })

        res.send(listMarket)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:78 ~ app.delete ~ error:", error)
    }
})

app.patch('/listMarket/:id', async (req: Request, res: Response) => {
    try {
        const list = Number(req.params.id)

        const listId = await prisma.listMarket.update({
            where: {
                id: list
            },
            data: req.body
        })
        res.send(listId)
    } catch (error) {
        console.log("🚀 ~ file: index.ts:94 ~ app.patch ~ error:", error)
    }
})





app.listen(5001, () => console.log('Servidor rodando!'))
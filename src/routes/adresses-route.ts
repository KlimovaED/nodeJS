import {Request, Response, Router} from 'express';

export const adressesRoute = Router({});

const adresses = [{id: 1, value: 'Lenina 1'}, {
    id: 2,
    value: 'Lenina 2'
}, {id: 3, value: 'Lenina 3'}]


adressesRoute.get('/', (req: Request, res: Response) => {
    res.send(adresses)
})
adressesRoute.get('/:id', (req: Request, res: Response) => {
    let street = adresses.find(st => st.id === +req.params.id)
    if (street) {
        res.send(street)
    } else {
        res.send(404)
    }
})

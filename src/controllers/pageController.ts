import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    // res.send('home no controller')
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'All animals deserve love',
            subtitle: 'List of all the animals',
            background: 'allanimals.jpg'
        },
        list 
    });
}
export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Dogs',
            subtitle: 'List of all the dogs',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Cats',
            subtitle: 'List of all the cats',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Fishes',
            subtitle: 'List of all the fishes',
            background: 'banner_fish.jpg'
        },
        list
    });
}

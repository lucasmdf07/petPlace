// traverse through all pets
// filter through type of pets
// filter pets by name
type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Male' | 'Female';

type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sex: PetSex
};

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'German Shepherd',
        color: 'Yellow and black',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Yellow',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Siberian Husky',
        color: 'White and black',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'White',
        sex: 'Female'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'White and Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persian',
        color: 'Yellow',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Black and White',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'White, black and yellow',
        sex: 'Female'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamese',
        color: 'Yellow and black',
        sex: 'Male'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'White',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Neon Tetra',
        color: 'Red and Blue',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'goldfish.jpg',
        name: 'Goldfish',
        color: 'Orange',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'otocinclus.jpg',
        name: 'Otocinclus',
        color: 'Green and White',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Red',
        sex: 'Male'
    },
    {
        type: 'fish',
        image: 'koi.jpg',
        name: 'Koi',
        color: 'White and Red',
        sex: 'Male'
    },
];

export const Pet = {
    getAll: (): Pet[] => {
        return data;
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
    }
};
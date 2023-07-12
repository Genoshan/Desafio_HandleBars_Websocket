import { Router } from 'express';

const router = Router ();

const food = [
    { name: "Pizza", price: 1000},
    { name: "Hamburguesa", price: 500},
    { name: "Papitas", price: 300},
    { name: "Pollito", price: 500},
    { name: "Pescadito", price: 600}
];

router.get('/', (req, res)=>{
    //antes renderizaba index
    res.render('home');
})



// router.get('/', (req, res)=>{
//     const user = {
//         name: 'Martin',
//         role: 'admin'
//     }

//     res.render ('index', {
//         user,
//         isAdmin: user.role === 'admin',
//         food
//     });
// });

router.get('/register', (req, res)=>{
    res.render('register');
})

export default router;
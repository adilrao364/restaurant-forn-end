import React, { useState } from 'react'
import b1 from "../../../Images/b1.jpg"
import b2 from "../../../Images/b2.jpg"
import b3 from "../../../Images/b3.jpg"
import b4 from "../../../Images/b4.jpg"
import b5 from "../../../Images/b5.jpg"
import b6 from "../../../Images/b6.jpg"
import b7 from "../../../Images/b8.jpg"
import b8 from "../../../Images/b7.jpg"
import six from "../../../Images/six.jpg"
import four from "../../../Images/four.jpg"

import p1 from "../../../Images/p1.jpg"
import p2 from "../../../Images/p2.jpg"
import p3 from "../../../Images/p3.jpg"
import p4 from "../../../Images/p4.jpg"
import p5 from "../../../Images/p5.jpg"
import p6 from "../../../Images/p6.jpg"
import p7 from "../../../Images/p7.jpg"
import p8 from "../../../Images/p8.jpg"
import p9 from "../../../Images/p9.jpg"
import p10 from "../../../Images/p10.jpg"

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DetailsIcon from '@material-ui/icons/Details';

function BurgerHOC(HocFunction) {
    const NewComponent = () => {
        const [burger, setProducts] = useState([
            { id: 1, srcImg: b1, name: 'Beefy Burgers', price: 3, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 2, srcImg: b2, name: 'Burger Boys', price: 7, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 3, srcImg: b3, name: 'Crackles Burger', price: 5, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 4, srcImg: b4, name: 'Burger Bizz', price: 7, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 5, srcImg: b5, name: 'Rocket Burgers', price: 11, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 6, srcImg: six, name: 'Bull Burgers', price: 9, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 7, srcImg: four, name: 'Delish Burger', price: 4, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 8, srcImg: b6, name: 'Smokin Burger', price: 3, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 9, srcImg: b7, name: 'Allens Burger', price: 4, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 10, srcImg: b8, name: 'Bymark Burger', price: 2, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
        ]);
        const [pizza] = useState([
            { id: 1, srcImg: p1, name: 'Pepronee Pizza', price: 6, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 2, srcImg: p2, name: 'Pizza Boys', price: 7, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 3, srcImg: p3, name: 'Crackles Pizza', price: 11, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 4, srcImg: p4, name: 'Olive Bizz', price: 9, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 5, srcImg: p5, name: 'Chicken Fajite', price: 10, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 6, srcImg: p6, name: 'Bull Fajita', price: 7, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 7, srcImg: p7, name: 'Zinger olive', price: 11, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 8, srcImg: p8, name: 'Peproni Olive', price: 6, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 9, srcImg: p9, name: 'Allens Pizza', price: 4, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
            { id: 10, srcImg: p10, name: 'Smokin Pizza', price: 6, moreBtn: DetailsIcon, cartBtn: AddShoppingCartIcon, wishBtn: FavoriteBorderIcon },
        ]);
        return (
            <>
                <HocFunction
                    burger={[...burger]}
                    pizza={[...pizza]}
                    setHook={setProducts}
                />
            </>
        )
    };
    return NewComponent;
};

export default BurgerHOC

import axios from "axios";
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import Product from "./Product";
import { render, screen } from '@testing-library/react';

vi.mock('axios');

describe('Product Component', () => {
    let product;

    let loadCart;

    beforeEach(() => {
        product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        }

        loadCart = vi.fn();
    })

    it('renders product details correctly', () => {
        render(<Product product={product} fetchInitialData={loadCart} />);
        expect(screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs")).toBeInTheDocument();
        expect(screen.getByText("$10.90")).toBeInTheDocument();
        expect(screen.getByTestId("product-image")).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(screen.getByText("87")).toBeInTheDocument();
        expect(screen.getByTestId("product-rating-stars")).toHaveAttribute("src", `images/ratings/rating-${product.rating.stars * 10}.png`);
    })

    it('add a product to cart', async () => {
        render(<Product product={product} fetchInitialData={loadCart} />);
        const addToCartButton = screen.getByTestId("add-to-cart-button");
        const user = userEvent.setup();
        await user.click(addToCartButton);
        expect(axios.post).toHaveBeenCalledWith('api/cart-items', {
            productId: product.id,
            quantity: 1
        });
        expect(loadCart).toHaveBeenCalled();
    })
})
import { useMutation} from "@tanstack/react-query";
import { productService } from "../services/ProductService";

export const useCheckout  = () => {
    return useMutation({
        mutationFn: (orderData) => productService.createOrder(orderData),
    });
}
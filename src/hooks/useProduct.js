import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/ProductService";

export const useProduct  = (id) => {
    return useQuery({
        queryKey:['products', id],
        queryFn: () => productService.getProduct(id),
    });
}
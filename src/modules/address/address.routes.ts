import { AddressController } from "./address.controller";
import { AddressService } from "./address.service";
import { Router } from "express";
import { authenticateToken } from "../auth/auth.middleware";

const addressRouter: Router = Router();
const addressService: AddressService = new AddressService();
const addressController: AddressController = new AddressController(addressService);

addressRouter.use(authenticateToken);
addressRouter.get("/", addressController.getAllAddres.bind(addressController));
addressRouter.get("/:id", addressController.getAddress.bind(addressController));
addressRouter.post("/", addressController.postAddress.bind(addressController));
addressRouter.put("/:id", addressController.deleteAddress.bind(addressController));

export default addressRouter;
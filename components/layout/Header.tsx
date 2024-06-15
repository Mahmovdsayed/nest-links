'use client'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
interface IProps {

}
const Headers = ({ }: IProps) => {
    return <>
        <Navbar >
            <NavbarBrand >
                <p className="font-semibold  text-default-300">NEST</p>
            </NavbarBrand>
        </Navbar>
    </>;
};

export default Headers;
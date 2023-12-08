"use client"

import { useState } from "react"
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
// import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "./ui/button";


const UploadButton = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if(!v) {
                setIsOpen(v)
            }
        }}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                example DialogContent
            </DialogContent>
        </Dialog>
    )
}


export default UploadButton
'use client'

import { Button } from "@/shared/ui/Button";
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)
  return (
    <div>
        <Button type="button" onClick={() => setIsOpen(!isOpen)}>
            Register
        </Button>
        {isOpen? 
        <div>Open</div>
        :
        null}
    </div>
  )
}

export default Header
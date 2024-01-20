interface IButton{
    className: string;
    onClick: () => void;
    type: 'button' | 'submit' | undefined;
    children: React.ReactNode;
}

const Button = ({className,onClick,type,children}:IButton) => {
  return (  
    <button className={`${className}`} type={type} onClick={()=> onClick}>
        {children}
    </button>
  )
}

export default Button
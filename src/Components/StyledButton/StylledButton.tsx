import { styled } from "@mui/material/styles";
import type { ReactNode } from "react";


interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const StylledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

    const StyledButton = styled("button")(({theme})=> ({

         backgroundColor: "transparent",
         border: '1px solid ${theme.palette.primary.contrastText}',
         borderRadius: "5px",
         padding: "5px 15px",
         width: "100%",
         color: theme.palette.secondary.contrastText,
         '&hover': {backgroundColor: theme.palette.primary.light},
         display: 'inline-flex',
          ilignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
    }))

  return (
    <>
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
    </>
      
  )
}

  export default StylledButton
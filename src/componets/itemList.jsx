import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import Item from "./item";

export default function ItemList({ products }) {
    const Item2 = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <div>
            {
                products.map(function (producto) {
                    return (
                      
                       <Item key={producto.id} item={producto} />
                       
                    )
                })
            }
        </div>
    );
}
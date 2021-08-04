import React, { useState } from "react";
import useStyles from "../styles";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    CardContent
} from "@material-ui/core/";
import Form from "./Form";
import Modal from "./Modal"


const Cards = ({ del, edit, state }) => {
    const [editState, seteditState] = useState([false, null])

    const handleClose = () => {
        seteditState([false, null])
    };

    const classes = useStyles();

    return (
        <main className={classes.main}>
            {state.map((data) => {
                return (
                    <Card key={data.key} className={classes.break}>
                        <CardContent className={classes.card}>
                            <Typography variant="h6">Food item: {data.name}</Typography>
                            <Typography variant="h6">Calories: {data.calorie}</Typography>
                            <Button
                                onClick={() => del(data.key)}
                                size="small"
                                variant="contained"
                                className={classes.del}
                            >
                                Delete
                            </Button>
                            <Button
                                onClick={() => seteditState([true, data])}
                                size="small"
                                variant="contained"
                                className={classes.edit}
                            >
                                Edit
                            </Button>
                        </CardContent>
                    </Card>
                );
            })
            }
            <Modal add={edit} open={editState[0]}  def={[editState[0], seteditState, editState[1]]} handleClose={handleClose} type="Edit" onClose={handleClose} />
        </main >
    );
};

export default Cards;

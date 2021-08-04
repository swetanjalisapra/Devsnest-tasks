import React from "react";
import {
    Button,
    FormControl,
    TextField,
    Card,
    Typography,
    CardContent,
} from "@material-ui/core/";
import { useForm } from "react-hook-form";
import useStyles from "../styles";


const Form = ({ add, def, type }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();


    return (
        <FormControl
            onSubmit={handleSubmit((data) => add(data, def[2], def[1]))}
            style={{ display: "flex", flexDirection: "column", width: "400px" }}
            component="div"
            color="secondary"
        >
            <TextField
                label="Food item"
                autoFocus={true}
                type="text"
                color="primary"
                defaultValue={def[1]}
                {...register("name")}
            />
            <TextField
                label="Calories"
                type="number"
                color="secondary"
                defaultValue={def[2]}
                {...register("calorie")}
            />
            <Button
                onClick={handleSubmit((data) => add(data, def[2], def[1]))}
            type="submit"
            size="small"
            variant="contained"
            color="primary"
            >
            {type}
            </Button>
        </FormControl >
    )
}

export default Form

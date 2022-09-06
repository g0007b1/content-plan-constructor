import {useForm} from "react-hook-form";
import {useActions} from "../../hooks/useActions";
import {useState} from "react";
import {Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography} from "@mui/material";

export const LoginForm = (props) => {

    const {register, handleSubmit} = useForm()
    const {login} = useActions()
    const [loading, setLoading] = useState(false)

    const onSubmit = (data) => {
        setLoading(true)
        login(data)
        setLoading(false)
    }

    if (loading) {
        return <div>lOADiNg</div>
    }

    return (
        <>
            <Container component="div" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">Забуриться</Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            autoComplete="email"
                            autoFocus
                            label={'Email'}
                            {...register('email')}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Пароль"
                            type="password"
                            id="password"
                            {...register('password')}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Войти
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}
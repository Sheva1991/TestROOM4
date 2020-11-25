import React, { useState, useCallback, useEffect } from 'react'
import { useStyles } from './styles'
import { Field, Formik, Form } from 'formik';
import useMount from 'hooks/useMount';
import { useDispatch, useSelector } from 'react-redux';
import TextField from 'components/TextField/TextField';
import { Box, Button, CircularProgress, Container, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { searchTrack } from './actions';
import { selectData, selectTotalPages, selectPerPage, selectCurrentPage, selectSearching, selectTotal } from './selectors';
import Pagination from '@material-ui/lab/Pagination';

const Search = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const data = useSelector(selectData)
    const totalPages = useSelector(selectTotalPages)
    const totalSize = useSelector(selectTotal)
    const perPage = useSelector(selectPerPage)
    const currentPage = useSelector(selectCurrentPage)
    const searching = useSelector(selectSearching)
    const [page, setPage] = useState(currentPage)
    const [value, setValue] = useState('')
    const mountState = useMount()

    const submit = async (values: { search: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        try {
            await dispatch(searchTrack(page, perPage, values.search))
            setValue(values.search)
        } finally {
            if (mountState.mounted) {
                setSubmitting(false)
            }
        }
    }

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value)
    }, []);

    useEffect(() => {
        dispatch(searchTrack(page, perPage, value))
    }, [dispatch, page, perPage])

    return (
        <Container className={classes.root}>
            <Formik
                initialValues={{ search: '' }}
                onSubmit={submit}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className={classes.form}>
                        <Field
                            component={TextField}
                            variant='outlined'
                            name="search"
                            type="text"
                            placeholder="Search"
                        />
                        <Box ml={2}>
                            <Button type='submit' variant="contained" color="primary" size='large' fullWidth disabled={isSubmitting || !isValid}>
                                Search
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
            {searching ?
                <Container className={classes.loader}>
                    <CircularProgress />
                </Container>
                :
                <>
                    {totalPages > 1 ? <Pagination className={classes.pagination} count={totalPages} color="primary" page={page} onChange={handleChange} /> : null}
                    {data &&
                        <List className={classes.list}>
                            {data?.map((item, index) => {
                                return (
                                    <React.Fragment key={`${item.name}-${index}`}>
                                        <ListItem className={classes.item} alignItems="flex-start" >
                                            <ListItemText disableTypography={true} primary={`Название трєка: ${item.name}`} />
                                            <ListItemText disableTypography={true} primary={`Артист: ${item.artist}`} />
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>
                                )
                            })

                            }
                        </List>
                    }
                </>
            }
            {totalSize === 0 ? <Typography variant="h2" component="h2" className={classes.title} >
                Ничего не найдено
            </Typography> : null}
        </Container>
    )
}

export default Search

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPerfomer } from './actions';
import { selectPerfomerName, selectPerfomerImage, selectPerfomerSummary, selectPerfomerTags } from './selectors';
import { Container, Typography, Box, Avatar } from '@material-ui/core';
import { useStyles } from './styles';

const Perfomer = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const params = useParams<{ name: string }>();
    const name = params.name
    const Fullname = useSelector(selectPerfomerName)
    const image = useSelector(selectPerfomerImage)
    const tags = useSelector(selectPerfomerTags)
    const summary = useSelector(selectPerfomerSummary)


    useEffect(() => {
        dispatch(fetchPerfomer(name))
    }, [name, dispatch])
    return (
        <Container className={classes.root}>
            <Typography variant="h2" component="h1" className={classes.title}>
                Исполнитель
            </Typography>
            <Box width='100%' my={4} className={classes.box}>
                <Avatar variant="square" alt='avatar'
                    src={image ? image[0]['#text'] : ''} className={classes.large} />
                <Typography variant="h3" component="h3" className={classes.title}>
                    {Fullname}
                </Typography>
            </Box>
            <Typography variant="h5" component="h4">
                Информация
            </Typography>
            <Box width='100%'>
                <Box mt={2}>
                    <Typography variant="body1" component="p" className={classes.bio}>
                        Биография: <br /> {summary}
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Typography variant="body1" component="p">
                        Тэги: {tags ? tags.tag.map((item) => {
                        return (`${item.name}, `)
                    }) : null}
                    </Typography>
                </Box>
            </Box>

        </Container>
    )
}

export default Perfomer

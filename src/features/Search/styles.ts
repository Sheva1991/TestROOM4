import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        form: {
            display: 'flex',
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                fontSize: theme.spacing(6)
            },

        },
        loader: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        list: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
            margin: theme.spacing(4),
            padding: 0
        },
        item: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
        },
        inline: {
            display: 'inline',
        },
        pagination: {
            marginBottom: theme.spacing(6)
        }

    }), { name: 'Search' }
);
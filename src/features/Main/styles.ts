import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: theme.spacing(2)
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                fontSize: theme.spacing(4)
            },
        },
        list: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
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
    }), { name: 'Main' }
);
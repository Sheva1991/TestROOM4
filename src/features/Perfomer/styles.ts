import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        title: {
            [theme.breakpoints.down('xs')]: {
                fontSize: theme.spacing(6)
            },

        },
        box: {
            display: 'flex',
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
                alignItems: 'center'
            },
        },
        large: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: theme.spacing(2)
        },
        bio: {
            overflow: 'hidden'
        }


    }), { name: 'Performer' }
);
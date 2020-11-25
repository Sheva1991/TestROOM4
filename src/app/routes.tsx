import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import Main from 'features/Main/Main';
import Search from 'features/Search/Search';
import Perfomer from 'features/Perfomer/Perfomer';

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={ROUTES.search} component={Search} />
                <Route exact path={ROUTES.performer} component={Perfomer} />
                <Route exact path={ROUTES.main} component={Main} />
            </Switch>
        </>
    )
}

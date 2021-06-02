import React from 'react'
import { Route, Switch } from 'react-router'
import MainLogin from "./login/mainLogin";
import SearchPokeByName from "./GetPokemons/ByName/GetInfo";
import GetPokeByType from "./GetPokemons/byType/getInfo";
import PageNotFound from "./error/notFound";
import {Main} from "./GetPokemons/main"

export default function Routes () {

    return (
        <div>
            <Switch>
                {/* <Route path="" component={MoreStatsByType} /> */}
                <Route path="/pokedex/name" component={SearchPokeByName}  />
                <Route path="/pokedex/type" component={GetPokeByType} />
                <Route path="/pokedex" component={Main} />
                <Route path="/" component={MainLogin} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </div>
    )
}
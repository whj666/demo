import React from 'react';
import {render} from 'react-dom';
import RouteMap from "./router/routeMap";
import {Provider} from 'react-redux';
import configureStore from './container/store/configureStore';
import {LocaleProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

render(
    <Provider store={configureStore()}>
        <LocaleProvider locale={zh_CN}>
            <RouteMap />
        </LocaleProvider>
    </Provider>,
    document.getElementById('root')
)

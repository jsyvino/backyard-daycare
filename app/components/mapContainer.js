import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDaycares, fetchFavDaycares, getMarkers } from '../reducers/index'
import { Link } from 'react-router-dom'
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps';
import MapView from './map2'
import DaycareListItem from './daycareListItem'


export class MapContainer extends Component {

    componentDidMount() {
        const user = this.props.currentUser
        this.props.getDaycares();
        if (user.name) this.props.getFavDaycares(user.id);
        this.props.clearMarkers([]);
    }

    render() {
        window.scrollTo(0, 80)
        const { daycares, markers } = this.props;
        return (
            <div>
                <MapView
                    center={{ lat: 41.879805, lng: -87.630489 }}
                    zoom={10}
                    containerElement={<div style={{ height: 70 + 'vh' }} />}
                    mapElement={<div style={{ height: 70 + 'vh' }} />}
                    markers={markers}
                />
                <div className="page">
                    <div className="pageTitle">
                        <h1>Daycare Centers</h1>
                    </div>
                    {!daycares.length ?
                        <div>
                            <h4>There are currently no Daycare Centers in the database</h4>
                        </div>
                        :
                        <div>
                            <div className="DaycareList">
                                {daycares.map((daycare) => {
                                    return (
                                        <DaycareListItem key={daycare.id} daycare={daycare} />
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }

}


const mapState = (state, ownProps) => {
    return {
        daycares: state.daycares,
        favDaycares: state.favDaycares,
        currentUser: state.currentUser,
        markers: state.markers
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        getDaycares: () => {
            dispatch(fetchDaycares());
        },
        getFavDaycares: (userId) => {
            dispatch(fetchFavDaycares(userId));
        },
        clearMarkers: (markers) => {
            dispatch(getMarkers(markers))
        }
    }
}

export default connect(mapState, mapDispatch)(MapContainer);
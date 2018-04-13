import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchDaycare, fetchLatLng, getMarkers, selectMarker, toggleDaycare } from '../reducers/index'
import { Link, withRouter } from 'react-router-dom'
import MapView from './map2'

export class SingleDaycare extends Component {

    componentDidMount() {
        let daycareId = this.props.match.params.daycareId;
        this.props.setDaycare(daycareId)
    }

    render() {
        const { daycare, getLatLng, currentUser, markers, selectedMarker, toggleFav } = this.props;
        let center = { lat: 41.879805, lng: -87.630489 }
        let favorite = false;
        if (daycare.name && currentUser.name) {
            favorite = daycare.userDaycares[0].favorite
        }
        console.log("RIGHT HERE ---------", center)
        return (
            <div>
                <div className="map">
                    {
                        selectedMarker.lat ?
                            <MapView
                                center={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                                zoom={13}
                                containerElement={<div style={{ height: 30 + 'vh' }} />}
                                mapElement={<div style={{ height: 30 + 'vh' }} />}
                                markers={selectedMarker.lat ? [selectedMarker] : []}
                            />
                            : <div />
                    }
                </div>
                <div className="singleView">
                    <div className="detailViewSing">

                        {
                            daycare.name ?
                                <div className="itemInfoSing">
                                    <div className="picStar">
                                        <img id="big-profile-pic" src={daycare.dayPics[0].imgUrl} />
                                        <span
                                            id="starSingle"
                                            hidden={currentUser.name ? false : true}
                                            onClick={(event) => toggleFav(event, currentUser.id, daycare.id)}
                                            className={favorite ? 'fav' : 'notFav'} >
                                            ★
                                        </span>
                                    </div>
                                    <h2>{daycare.name}</h2>
                                    <h3>{daycare.style}</h3>
                                    <h4>Price: ${daycare.price} {daycare.priceUnit}</h4>
                                    <h4>{daycare.description}</h4>
                                    <h3>{daycare.hours}</h3>
                                    <div id='contact'>
                                        <h4 className="contact" >Contact Info:</h4>
                                        <h5 className="contact" ><b>Contact Person: </b>{daycare.contact}</h5>
                                        <h5 className="contact" ><b>Email: </b>{daycare.email}</h5>
                                        <h5 className="contact" ><b>Phone: </b>{daycare.phone}</h5>
                                        <h5 className="contact" ><b>Address: </b>{daycare.address}</h5>
                                    </div>
                                </div>
                                :
                                <div />
                        }
                    </div>
                </div >
            </div>

        )
    }
}

const mapState = (state, ownProps) => {
    return {
        daycare: state.selectedDaycare,
        currentUser: state.currentUser,
        markers: state.markers,
        selectedMarker: state.selectedMarker
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        setDaycare: (daycareId) => {
            dispatch(fetchDaycare(daycareId))
        },
        getLatLng: (address, daycareId, name) => {
            dispatch(fetchLatLng(address, daycareId, name))
        },
        clearMarkers: (markers) => {
            dispatch(getMarkers(markers))
        },
        toggleFav: (event, userId, daycareId) => {
            event.preventDefault();
            dispatch(toggleDaycare(userId, daycareId))
        }
    }
}

const connectedDaycare = withRouter(connect(mapState, mapDispatch)(SingleDaycare))
export default connectedDaycare;
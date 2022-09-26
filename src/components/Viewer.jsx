import React from 'react'

const Viewer = () => {
    var viewer = "";

    var getViewer = function () {
        return viewer;    // Or pull this from cookie/localStorage
    };

    var setViewer = function (val) {
        viewer = val;
        // Also set this in cookie/localStorage
    };

    return {
        getViewer: getViewer,
        setViewer: setViewer
    }
}

export default Viewer
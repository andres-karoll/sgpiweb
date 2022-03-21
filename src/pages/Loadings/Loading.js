import React from 'react';
import {Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function Loading() {
  return (
    <div style={{ height: '50vh', position:'relative' }}>
        <div style={{ margin: '0', position:'absolute', top:'50%', left:'50%' }}>
        <Spinner color = "dark" />
        </div>
    </div>
  )
}
export default Loading;
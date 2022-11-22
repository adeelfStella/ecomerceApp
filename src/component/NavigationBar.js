import React from "react";
const NavBar = () => {
    
    const renderNavOption = () => {
        return (
            <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', minWidth: '30%', alignSelf: 'flex-end', }}>
                <h4>Home</h4>
                <h4>products</h4>
                <h4>categories</h4>
            </div>
        )
    }

    return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', minHeight: '10%', backgroundColor: '#ccc' }}>
                <h2>elo</h2>
                {renderNavOption()}
                <h2 style={{ marginRight: '10px' }}>Login</h2>

            </div>
       
    )
}
export default NavBar
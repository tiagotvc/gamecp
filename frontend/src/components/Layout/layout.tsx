import React from "react";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <div className="container-navbar">

            </div>
            <div className="container-children">
                {children}
            </div>
        </div>
    )
}
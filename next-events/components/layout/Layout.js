import MainHeader from './MainHeader';

function Layout(props) {
    return (
        <>
            <MainHeader></MainHeader>
            <main>{props.children}</main>
        </>
    );
}

export default Layout;

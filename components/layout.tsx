interface CustomComp {
    children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: CustomComp) => {
    return (
        <div className='bg-dark-blue'>
            <div className='flex  justify-center h-screen w-screen items-center'>
                {children}
            </div>
            <div className='attribution text-center text-light-cyan'>
                Challenge by <a className='hover:text-neon-green' href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>.
                Coded by <a href='#'>shavindaL</a>.
            </div>
        </div>
    )
}

export default Layout;
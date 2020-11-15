import React, { useState , useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fade, makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import SearchBar from 'material-ui-search-bar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	toolbarTitle: {
		flexGrow: 1,
	},
}));

function Header() {
	const classes = useStyles();
	let history = useHistory();
	const [data, setData] = useState({ search: '' });
    let cat = "";

    const [auth,setAuth] = useState("");
	useEffect(
	    () => {
           setAuth(localStorage.getItem('access_token'))
	    },
	    [auth]
	)



	const goSearch = (e) => {
		history.push({
			pathname: '/search/',
			search: '?search=' + data.search,
		});
		window.location.reload();
	};
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="default"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						color="inherit"
						noWrap
						className={classes.toolbarTitle}
					>
						<Link
							component={NavLink}
							to="/"
							underline="none"
							color="textPrimary"
						>
							GROWTH PLUG
						</Link>
					</Typography>


					<nav>

					{

					    (auth === null) ? (

					        <div>
					       <Button
							color="Primary"
							variant="outlined"
							className={classes.link}
							component={NavLink}
							to="/register">Register
						</Button>

					     <Button
                            color="primary"
                            variant="outlined"
                            className={classes.link}
                            component={NavLink}
                            to="/login" >Login
					        </Button>
                            </div>

                        ) : (


                            <Button
                                href="#"
                                color="primary"
                                variant="outlined"
                                className={classes.link}
                                component={NavLink}
                                to="/logout"
                            >
                                Logout
                            </Button>
                        )
					}
					</nav>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;
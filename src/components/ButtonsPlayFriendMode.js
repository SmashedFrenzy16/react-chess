import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import offerDrawDialogActionTypes from '../constants/offerDrawDialogActionTypes';
import requestTakebackDialogActionTypes from '../constants/requestTakebackDialogActionTypes';

const useStyles = makeStyles((theme) => ({
  paperButton: {
    textTransform: "none",
  },
}));

const ButtonsPlayFriendMode = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [anchorElRequestTakeback, setAnchorElRequestTakeback] = React.useState(null);
  const [anchorElDrawOffer, setAnchorElDrawOffer] = React.useState(null);

  const handleCloseRequestTakeback = () => {
    setAnchorElRequestTakeback(null);
  };

  const handleCloseDrawOffer = () => {
    setAnchorElDrawOffer(null);
  };

  if (state.mode.playfriend.accepted) {
    return (
      <div>
        <Button
          variant="outlined"
          className={classes.paperButton}
          onClick={() => {
            dispatch({ type: requestTakebackDialogActionTypes.OPEN });
            handleCloseRequestTakeback();
          }}
        >
          Propose a takeback
        </Button>
        <Button
          variant="outlined"
          className={classes.paperButton}
          onClick={() => {
            dispatch({ type: offerDrawDialogActionTypes.OPEN });
            handleCloseDrawOffer();
          }}
        >
          Offer draw
        </Button>
        <Button
          variant="outlined"
          className={classes.paperButton}
        >
          Resign
        </Button>
      </div>
    );
  }

  return null;
}

export default ButtonsPlayFriendMode;

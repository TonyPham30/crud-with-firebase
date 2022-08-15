import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackspaceIcon from '@mui/icons-material/Backspace';
import moment from "moment"
import axios from "axios"
import { apiBase } from '../../../api';
import EditIcon from '@mui/icons-material/Edit';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ListBlog(blog) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [idBlog, setIdBlog] = React.useState("")
  const [titleUpdate, setTitleUpdate] = React.useState("")
  const [contentUpdate, setContentUpdate] = React.useState("")
  const handleClickOpen = (id) => {
    setOpen(true);
    setIdBlog(id)
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleDeleteBlog = (id) => {
    axios.delete(`${apiBase}/delete/${id}`).then(res => {
      alert("delete success")
      window.location.reload()
    }).catch(err => {
      alert("delete false")
      window.location.reload()
    })
  }
  const handleUpdateBlog = () => {
    axios.put(`${apiBase}/update/${idBlog}`, {
      title: titleUpdate,
      content: contentUpdate
    }).then(res => {
      alert("update success")
      setOpen(false);
      window.location.reload()
    }).catch(err => {
      alert("update false")
      setOpen(false);
      window.location.reload()
    })
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <EditIcon onClick={() => handleClickOpen(blog.blog.id)} />
              <BackspaceIcon onClick={() => handleDeleteBlog(blog.blog.id)} />
            </IconButton>
          }
          title={blog.blog.userName ? blog.blog.userName : null}
          subheader={moment(blog.blog.dateTime).format('L')}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {blog.blog.title ? blog.blog.title : null}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {blog.blog.content}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Update blog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Update blog here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              fullWidth
              variant="standard"
              onChange={(e) => setTitleUpdate(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="Content"
              label="Content"
              fullWidth
              variant="standard"
              onChange={(e) => setContentUpdate(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleUpdateBlog}>Update</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

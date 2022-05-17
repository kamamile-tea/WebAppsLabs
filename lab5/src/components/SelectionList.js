import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList(props) {
  const selectionLabel = props.title;
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = React.useState(selectionLabel);

  const handleClick = () => {
    setOpen(!open);
  };

  const updateSelection = (choice) => {
    console.log(choice);
    setSelection(choice);
    handleClick();
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 200, bgcolor: 'grey.500' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
      {console.log(props.options)}
        <ListItemText primary= { selection } />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {props.options.map((choice, index) => (
              <ListItemButton value = {choice} sx={{ pl: 4 }} key = {index} onClick = {(e) => updateSelection(e.target.textContent)}>
                <ListItemText value = {choice} primary = {choice} />
              </ListItemButton>
            ))}
        </List>
      </Collapse>
    </List>
  );
}

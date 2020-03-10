import React, { Component } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { FormLabel, TextField, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import DevicesIcon from "@material-ui/icons/Devices";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import SportsIcon from "@material-ui/icons/Sports";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import { withRouter } from "react-router";
import validate from "./helpers/validation";
import PropTypes from "prop-types";

class ShareItemForm extends Component {
  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
        return true;
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };

  render() {
    const { classes, tags, history } = this.props;
    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => (
          <div className={classes.addWidth}>
            <Typography className={classes.header}>Share. Borrow. </Typography>
            <Typography className={classes.headerTwo}>Prosper.</Typography>
            <Mutation mutation={ADD_ITEM_MUTATION}>
              {addItem => {
                return (
                  <Form
                    onSubmit={async values => {
                      try {
                        await addItem({
                          variables: {
                            item: {
                              ...values,
                              tags: this.applyTags(values.tags || [], tags)
                            }
                          }
                        });
                        history.push("/profile");
                      } catch (err) {
                        throw new Error(err);
                      }
                    }}
                    validate={validate.bind(this)}
                    render={({
                      handleSubmit,
                      pristine,
                      submitting,
                      invalid
                    }) => (
                      <form
                        onSubmit={event => {
                          handleSubmit(event);
                          resetPreview();
                        }}
                      >
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (values) {
                              this.dispatchUpdate(values, tags, updatePreview);
                            }
                            return "";
                          }}
                        />
                        <Field
                          name="title"
                          render={({ input, meta }) => {
                            return (
                              <div className="field" width="100%">
                                <TextField
                                  className={classes.textField}
                                  id="standard-textarea"
                                  placeholder="Name your item"
                                  margin="normal"
                                  {...input}
                                />
                                {meta.touched && meta.invalid && (
                                  <div className="error">{meta.error}</div>
                                )}
                              </div>
                            );
                          }}
                        />
                        <Field
                          name="description"
                          render={({ input, meta }) => {
                            return (
                              <div>
                                <TextField
                                  className={classes.textField}
                                  id="filled-description"
                                  placeholder="Describe your item"
                                  multiline
                                  rows="2"
                                  margin="normal"
                                  {...input}
                                />
                                {meta.touched && meta.invalid && (
                                  <div className="error">{meta.error}</div>
                                )}
                              </div>
                            );
                          }}
                        />
                        <div className={classes.tagContainer}>
                          <FormLabel component="legend">Add tags</FormLabel>
                          <div className={classes.addGrid}>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Household Items"
                              />
                              <span>Household Items &nbsp;</span>
                              <HomeOutlinedIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Tools"
                              />
                              <span>Tools &nbsp;</span>
                              <BuildOutlinedIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Electronics"
                              />
                              <span>Electronics &nbsp;</span>
                              <DevicesIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Physical Media"
                              />
                              <span>Physical Media &nbsp;</span>
                              <BookOutlinedIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Sporting Goods"
                              />
                              <span>Sporting Goods &nbsp;</span>
                              <SportsIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Musical Instruments"
                              />
                              <span>Musical Instruments &nbsp; &nbsp;</span>
                              <MusicNoteOutlinedIcon />
                            </label>
                            <label>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value="Recreation Equipment"
                              />
                              <span>Recreation Equipment &nbsp;</span>
                              <EmojiEmotionsOutlinedIcon />
                            </label>
                          </div>

                          <Button
                            className={classes.shareButton}
                            type="submit"
                            disabled={pristine || submitting || invalid}
                          >
                            Share
                          </Button>
                        </div>
                      </form>
                    )}
                  />
                );
              }}
            </Mutation>
          </div>
        )}
      </ItemPreviewContext.Consumer>
    );
  }
}

ShareItemForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  history: PropTypes.object
};

export default withRouter(withStyles(styles)(ShareItemForm));

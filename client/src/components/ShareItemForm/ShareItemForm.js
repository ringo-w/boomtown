import React, { Component } from "react";
import { Form, Field, FormSpy } from "react-final-form";
import { FormLabel, TextField, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import BuildIcon from "@material-ui/icons/Build";
import DevicesIcon from "@material-ui/icons/Devices";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import BookIcon from "@material-ui/icons/Book";
import SportsIcon from "@material-ui/icons/Sports";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";

class ShareItemForm extends Component {
  validate = values => {
    const error = {};

    if (!values.name) {
      error.name = "Required";
    }
    if (!values.description) {
      error.description = "Required";
    }
    return error;
  };

  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
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
    const { classes, tags } = this.props;
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
                      } catch (err) {
                        throw new Error();
                      }
                    }}
                    render={({
                      handleSubmit,
                      pristine,
                      submitting,
                      invalid
                    }) => (
                      <form onSubmit={handleSubmit}>
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
                                  label="Name your item"
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
                                  rows="4"
                                  {...input}
                                />
                                {meta.touched && meta.invalid && (
                                  <div className="error">{meta.error}</div>
                                )}
                              </div>
                            );
                          }}
                        />
                        <FormLabel component="legend">Add some tags</FormLabel>
                        <div className={classes.addGrid}>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Household Items"
                            />
                            Household Items
                            <HomeIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Tools"
                            />
                            Tools
                            <BuildIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Electronics"
                            />
                            Electronics
                            <DevicesIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Physical Media"
                            />
                            Physical Media
                            <BookIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Sporting Goods"
                            />
                            Sporting Goods
                            <SportsIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Musical Instruments"
                            />
                            Musical Instruments
                            <MusicNoteIcon />
                          </label>
                          <label>
                            <Field
                              name="tags"
                              component="input"
                              type="checkbox"
                              value="Recreation Equipment"
                            />
                            Recreation Equipment
                            <DriveEtaIcon />
                          </label>
                        </div>
                        <Button
                          className={classes.shareButton}
                          type="submit"
                          disabled={pristine || submitting || invalid}
                        >
                          Share
                        </Button>
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

export default withStyles(styles)(ShareItemForm);

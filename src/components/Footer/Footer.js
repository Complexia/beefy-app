import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

import styles from './styles';

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <div className={classes.title}>coco finance</div>
        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-book ${classes.linkIcon}`}></i>
          <span>docs</span>
        </a>

        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-file-alt ${classes.linkIcon}`}></i>
          <span>blog</span>
        </a>

        <a
          href="https://github.com/Complexia"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-github ${classes.linkIcon}`}></i>
          <span>{t('source')}</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('products')}</div>
        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-landmark ${classes.linkIcon}`}></i>
          <span>gov</span>
        </a>

        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-vote-yea ${classes.linkIcon}`}></i>
          <span>vote</span>
        </a>

        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fas fa-hand-holding-usd ${classes.linkIcon}`}></i>
          <span>app</span>
        </a>
      </div>

      <div className={classes.column}>
        <div className={classes.title}>{t('socials')}</div>
        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-twitter ${classes.linkIcon}`}></i>

          <span>twitter</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-telegram ${classes.linkIcon}`}></i>

          <span>telegram</span>
        </a>
        <a
          href="https://docs.google.com/document/d/1ZvKvt8hWqyGU4kJxbVbDMFXwBqv9wLFNC9Q1kwJJ9Mk/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          <i className={`fab fa-discord ${classes.linkIcon}`}></i>
          <span>discord</span>
        </a>
      </div>
    </div>
  );
};

export default memo(Footer);

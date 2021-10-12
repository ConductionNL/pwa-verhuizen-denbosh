import React from 'react';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import clsx from 'clsx';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector from '@mui/material/StepConnector';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Nieuw adres', 'Verhuisdatum', 'Meeverhuizers', 'Contactgegevens', 'Controle'];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Nieuw adres';
    case 1:
      return 'Verhuisdatum';
    case 2:
      return 'Meeverhuizers';
    case 3:
      return 'Contactgegevens';
    case 4:
      return 'Controle';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers(currentStep) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(currentStep.currentStep);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {/*<div>*/}
      {/*  {activeStep === steps.length ? (*/}
      {/*    <div>*/}
      {/*      <Typography className={classes.instructions}>*/}
      {/*        All steps completed - you&apos;re finished*/}
      {/*      </Typography>*/}
      {/*      <Button onClick={handleReset} className={classes.button}>*/}
      {/*        Reset*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    <div>*/}
      {/*      <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>*/}
      {/*      <div>*/}
      {/*        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>*/}
      {/*          Back*/}
      {/*        </Button>*/}
      {/*        <Button*/}
      {/*          variant="contained"*/}
      {/*          color="primary"*/}
      {/*          onClick={handleNext}*/}
      {/*          className={classes.button}*/}
      {/*        >*/}
      {/*          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}*/}
      {/*        </Button>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
}

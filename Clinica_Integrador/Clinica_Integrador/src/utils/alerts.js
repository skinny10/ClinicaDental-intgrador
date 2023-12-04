import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal);

export const showAlert = (title, text, icon) => {
  MySwal.fire({
    title,
    text,
    icon,
  });
};

export const showError = (title, text) => {
  showAlert(title, text, 'error');
};

export const showInfo = (title, text) => {
  showAlert(title, text, 'info');
};

export const showWarning = (title, text) => {
  showAlert(title, text, 'warning');
};

export const showSuccess = (title, text) => {
  showAlert(title, text, 'success');
};

export const showQuestion = (title, text) => {
  showAlert(title, text, 'question');
};

export default alert
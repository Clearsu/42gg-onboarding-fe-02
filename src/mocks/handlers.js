import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username, password } = req.body;

    let loginResponse = null;
    if (username === 'apple' && password === 'appleisred') {
      sessionStorage.setItem('is-authenticated', 'true');
      sessionStorage.setItem('role', 'admin');
      loginResponse = res(
        ctx.status(200),
        ctx.json({
          message: 'Login successful',
          username: 'apple',
          role: 'admin',
        })
      );
    } else if (username === 'banana' && password === 'bananaisyellow') {
      sessionStorage.setItem('is-authenticated', 'true');
      sessionStorage.setItem('role', 'manager');
      loginResponse = res(
        ctx.status(200),
        ctx.json({
          message: 'Login successful',
          username: 'banana',
          role: 'manager',
        })
      );
    } else if (username === 'jincpark' && password === '1q2w3e4r') {
      sessionStorage.setItem('is-authenticated', 'true');
      sessionStorage.setItem('role', 'normal');
      loginResponse = res(
        ctx.status(200),
        ctx.json({
          message: 'Login successful',
          username: 'jincpark',
          role: 'normal',
        })
      );
    } else {
      loginResponse = res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Invalid credentials',
        })
      );
    }

    return loginResponse;
  }),
];

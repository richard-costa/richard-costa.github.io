---
title: "Bells' Theorem: Original Paper (IN PROGRESS)"
layout: page
mathjax: true
---

[⬅️ Back to Bell's Theorem Page]({% link notes/bells_theorem/bells_theorem.md %})


Paper: [Bell, J.S., 1964. On the einstein podolsky rosen paradox. *Physics Physique Fizika*, *1*(3), p.195.](https://journals.aps.org/ppf/pdf/10.1103/PhysicsPhysiqueFizika.1.195)

# Contents

[Main Result](#main-result)

[A More Formal Proof](#a-more-formal-proof)

[Approximation](#approximation)

---

# Main Result


## Setup 

The setup/physical situation considered for what follows is this:

- Pair of spin $1/2$ particles in a singlet state (total angular momentum is zero) and moving freely in opposite directions
- Measurements are made by Stern-Gerlach magnets on selected components of spin $\vec{\sigma_{1}}, \vec{\sigma_{2}}$.

Let $\vec{a}, \vec{b}$ unit vectors and $\lambda$ a single continuous parameter. Denote the result of measuring $\vec{\sigma_{1}} \cdot \vec{a}$ as $A$ and $\vec{\sigma_{2}} \cdot \vec{b}$ as $B$. In $\hbar/2$ units, possible results: $A(\vec{a}, \lambda) = \pm 1, B(\vec{b}, \lambda) = \pm 1$.

The assumption is that $B$ does not depend on the setting of $\vec{a}$ (of the magnet for particle $1$) nor $A$ on $\vec{b}$.

## Derivation

__Definition__. Let $\rho(\lambda)$ be the probability distribution for $\lambda$. The expected value of the product of the two components $\vec{\sigma_{1}} \cdot \vec{a}$ and $\vec{\sigma_{2}} \cdot \vec{b}$ is given by

$$
P(\vec{a}, \vec{b}) = \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) B(\vec{b}, \lambda).
$$

The quantum mechanical expected value for our singlet state is $\langle \vec{\sigma_{1}} \cdot \vec{a} \; \vec{\sigma_{2}} \cdot \vec{b} \rangle = - \vec{a} \cdot \vec{b}$.

Since $\min{\left( A(\vec{a}, \lambda) B(\vec{b}, \lambda) \right)}= -1$ and $\int d\lambda \rho(\lambda) = 1$, then $ \min \left( P(\vec{a}, \vec{b}) \right) = -1$.  In particular, measuring spin components along the same direction, i.e., when $\vec{a} = \vec{b}$, gives us $A(\vec{a}, \lambda) = - B(\vec{a}, \lambda)$ by conservation of angular momentum and so $P$ reaches its minimum in this case:

$$
P(\vec{a}, \vec{b}= \vec{a}) = \int d \lambda \rho(\lambda) \underbrace{A(\vec{a}, \lambda) B(\vec{a}, \lambda)}_{= -1} = - \int d \lambda \rho(\lambda) = -1
$$

We can use the conservation of momentum to replace $B(\vec{b}, \lambda)$ for $ - A(\vec{b}, \lambda)$ in the general expression and rewrite

$$
P(\vec{a}, \vec{b}) = - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) A(\vec{b}, \lambda).
$$

For any other unit vector $\vec{c}$

$$
\begin{aligned}
P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) &= - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) A(\vec{b}, \lambda) + \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) A(\vec{c}, \lambda)\\
&= - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) A(\vec{b}, \lambda) + \int d \lambda \rho(\lambda) A(\vec{a}, \lambda) \underbrace{A(\vec{b}, \lambda)^{2}}_{=1} A(\vec{c}, \lambda) \\
&= - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda)A(\vec{b}, \lambda)\left[1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda) \right].
\end{aligned}
$$


Since $\rho(\lambda)$ is a density probability distribution we have $\rho(\lambda) \geq 0, \; \forall \lambda$. That way $\rho(\lambda)\left[1 - A(\vec{a}, \lambda) A(\vec{c}, \lambda) \right] \geq 0$. Moreover $\| A(\vec{a}, \lambda) A(\vec{b}, \lambda) \| = 1$, then

$$
\begin{aligned}
\bigl| P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) \bigr| &= \biggl| - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda)A(\vec{b}, \lambda)\left[1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda) \right] \biggr| \\
&\leq \int d \lambda \rho(\lambda) \left(1 - A(\vec{b}, \lambda) A(\vec{a}, \lambda) \right) \\
&= \int d \lambda \rho(\lambda) - \int d \lambda \rho(\lambda) A(\vec{b}, \lambda) A(\vec{c}, \lambda) = 1 + P(\vec{b}, \vec{c})
\end{aligned}
$$

Therefore we get __Bell's original inequality__:

$$
\begin{aligned}
 \bigl | P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) \bigr| &\leq 1 + P(\vec{b}, \vec{c}).
 \end{aligned}
$$

For small $\| \vec{b} - \vec{c}\|$ (or equivalently $\vec{b} \approx \vec{c}$) we can expand $\| P(\vec{a}, \vec{b}) + P(\vec{a}, \vec{c})\|$ in Taylor series:


$$
\begin{aligned}
P(\vec{a}, \vec{b}) &\approx P(\vec{a}, \vec{b}=\vec{c}) + (\vec{b} - \vec{c}) \sum_{i}\frac{\partial}{\partial c_{i}} P(\vec{a}, \vec{b} = \vec{c}) \\
\implies | P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) | & \approx | (\vec{b} - \vec{c})  \nabla_{\vec{c}} P(\vec{a}, \vec{b} = \vec{c})| = | \vec{b} - \vec{c}| | \nabla_{\vec{c}} P(\vec{a}, \vec{b} = \vec{c}) | \\
\implies P(\vec{b}, \vec{c}) & \approx | \vec{b} - \vec{c}| | \nabla_{\vec{c}} P(\vec{a}, \vec{b} = \vec{c}) | - 1.
\end{aligned}
$$


So unless $P$ is constant we can reach the minimum at $-1$ for $\vec{b} = \vec{c}$ and the best we can do is $P(\vec{b}, \vec{c}) \geq - 1$, whereas the __exact__ quantum mechanical expectation is 

$$
\left\langle \vec{\sigma_{2}} \cdot \vec{b} \; \vec{\sigma_{3}} \vec{c}_{|_{\vec{c} = \vec{b}}} \right\rangle = - \vec{b} \cdot \vec{c}_{|_{\vec{c} = \vec{b}}} = -1
$$

# A More Formal Proof

[Back to Contents](#contents)

The following proof is just a more formal way to proof the main inequality.

__Theorem 1__: Let $f$ be a real, continuous function on the interval $[a, b]$. Then

$$
\biggl| \int_{a}^{b} f(x) dx \biggr| \leq \int_{a}^{b} | f(x) | dx. 
$$

__Proof__: Since $- \| f(x) \| \leq f(x) \leq \| f(x) \|$, then

$$
- \int_{a}^{b} | f(x) | dx \leq \int_{a}^{b} f(x) dx  \leq \int_{a}^{b} | f(x) | dx. 
$$

Now for any $r, t \in \mathbb{R}$ we have $\| r \| \leq t \iff -t \leq r \leq t$. Therefore,

$$
- \int_{a}^{b} | f(x) | dx \leq \int_{a}^{b} f(x) dx  \leq \int_{a}^{b} | f(x) | dx \iff  \biggl| \int_{a}^{b} f(x) dx \biggr| \leq \int_{a}^{b} | f(x) | dx
$$

and hence the result. $ \; \blacksquare$

__Corollary 1__: 

$$
\biggl| \int_{a}^{b} f(x) g(x) dx \biggr| \leq  \int_{a}^{b} |f(x)||g(x)| dx.
$$

__Proof__: Just set $h(x) \coloneqq f(x)g(x)$ and use theorem 1. $\blacksquare$.

__Theorem__: Bell's Inequality.

__Proof__: To save space let us start with the given expression

$$
\begin{aligned}
\bigl| P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) \bigr| &= \biggl| - \int d \lambda \rho(\lambda) A(\vec{a}, \lambda)A(\vec{b}, \lambda)\left[1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda) \right] \biggr| &= \\
&= \biggl| \int d \lambda \rho(\lambda) A (\vec{a}, \lambda) A (\vec{b}, \lambda) \left[ 1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda) \right] \biggr|.
\end{aligned}
$$

By Corolloary 1:

$$
\begin{aligned}
& \biggl| \int d \lambda \rho(\lambda) A (\vec{a}, \lambda) A (\vec{b}, \lambda) \left[ 1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda) \right] \biggr| \leq \int d \lambda | \rho(\lambda) A(\vec{a}, \lambda) A(\vec{b}, \lambda)| | 1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda)| \\
& = \int d \lambda | \underbrace{A(\vec{a}, \lambda) A(\vec{b}, \lambda)}_{=1} | | \underbrace{\rho(\lambda)}_{\geq 0} [ \underbrace{1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda)}_{\geq 0} ]| \\
& \leq \int d \lambda \rho(\lambda)[1 - A(\vec{b}, \lambda) A(\vec{c}, \lambda)] = 1 + P(\vec{b}, \lambda).
\end{aligned}
$$

Therefore,

$$
\bigl| P(\vec{a}, \vec{b}) - P(\vec{a}, \vec{c}) \bigr| \leq  1 + P(\vec{b}, \lambda).
$$

$\blacksquare$

# Approximation

[Back to Contents](#contents)

__NOTE__: I still don't quite understand how to derive the main result of this section of the paper, so this is incomplete and most likely wrong.

Can the quantum mechanical expression be made arbitrarily close to the expectation value $P(\vec{a}, \vec{b})$ ? To answer this, consider the averages $\overline{P}(\vec{a} \vec{b})$ and $\overline{- \vec{a} \cdot \vec{b}}$. Those averages are independent averages of $P(\vec{a}', \vec{b}')$ and $- \vec{a}', \vec{b}'$ for vectors $\vec{a}', \vec{b}'$, where those vectors lie within some small angles of $\vec{a}$ and $\vec{b}$. 

Bell then writes 'suppose that for all $\vec{a}$ and $\vec{b}$ the difference is bounded by $\varepsilon$:
$$
\bigl| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b} \bigr| \geq \varepsilon
$$


__My first issue/question__: I don't understand why he didn't take the difference of the averages instead, that is,

$$
\begin{aligned}
| \text{Hidden Variables Pred.} -  \text{QM Pred.} | & =\biggl| \overline{P}(\vec{a}, \vec{b}) - \left(- \overline{\vec{a} \cdot \vec{b}} \right) \biggr| \leq \varepsilon \\
\implies & | \overline{P}(\vec{a}, \vec{b}) + \overline{\vec{a} \cdot \vec{b}} | \leq \varepsilon \; \; ?
\end{aligned}
$$


Continuing, he also suppose that the difference between the average and the exact quantum mechanical expression is at most some $\delta$:

$$
| \overline{\vec{a} \cdot \vec{b}} - \vec{a} \cdot \vec{b} |\leq \delta.
$$

From $\| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b} \| \geq \varepsilon$ we can get $\| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b}\| \leq \varepsilon + \delta$.Next we use this expression to derive another, relating  the integral expression for the average probability and $\varepsilon  + \delta$. From the definition of $P(\vec{a}, \vec{b})$ we have

$$
\overline{P}(\vec{a}, \vec{b}) = \int d \lambda \rho(\lambda) \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)
$$

where $\| \overline{A}(\vec{a}, \lambda) \| \leq 1, \|\overline{B}(\vec{b}, \lambda)\| \leq 1$. Then,

$$
\begin{aligned}
 \bigl| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b} \bigr|  &= \biggl| \int d \lambda \rho(\lambda) \overline{A}(\vec{a}, \lambda) \overline{B} (\vec{b}, \lambda) + \vec{a} \cdot \vec{b} \biggr| \leq \epsilon + \delta \\

& \vec{a} = \vec{b} \implies: \\
 \bigl| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b} \bigr| &= \biggl| \int d \lambda \rho(\lambda) \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + 1\biggr| = \\
& = \biggl| \int d \lambda \rho(\lambda) \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + \int d \lambda \rho(\lambda) \biggr| = \\
&= \biggl| \int d \lambda \rho(\lambda) \left[ \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + 1\right]\biggr| \\

& x \leq | x | \implies: \\
 \bigl| \overline{P}(\vec{a}, \vec{b}) + \vec{a} \cdot \vec{b} \bigr| &= \int d \lambda \rho(\lambda) \left[ \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + 1\right] \biggr| \leq \biggl| \int d \lambda \rho(\lambda) \left[ \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + 1\right]\biggr| \leq \epsilon + \delta \\

& \implies \int d \lambda \rho(\lambda) \left[ \overline{A}(\vec{a}, \lambda) \overline{B}(\vec{b}, \lambda)_{\vec{b} = \vec{a}} + 1\right] \leq \epsilon + \delta
\end{aligned}
$$




---
title: "Statistical Mechanics II | 1 -The Boltzmann Equation"
layout: page
mathjax: true
typora-root-url: ./..\..
---

# Contents

[1.1 Introduction](#11-introduction)

[1.2 Phase space and the Distribution Function](#12-phase-space-and-the-distribution-function)

[1.3 Deriving the Boltzmann Equation](#13-deriving-the-boltzmann-equation)

[1.4 The Collision Term](#14-the-collision-term)

[1.5 Scattering](#15-scattering)

---

# 1.1 Introduction

IN A FIRST course in statistical mechanics course we usually focus on systems at thermodynamic equilibrium. In those systems the macroscopic state does not depend on time, that is, everything that was supposed to happen regarding its thermal evolution already happened and the system reached equilibrium. The theoretical framework used to describe these kind of systems is well established in the theory of ensembles, specifically the microcanonical, canonical and grand canonical ensembles. In this context we have already studied several techniques to obtain the partition function and, from it, the thermodynamics we are interested in, whether we are dealing with classical or quantum systems.

In these notes we are going to study systems that are not in thermodynamic equilibrium. The description of those kind of systems is far less complete and satisfactory than those in equilibrium, so it is a theory still under development. 

In practice there are several ways to describe a system out of equilibrium, some better than others depending on the type of problem at hand. In general, there are two main ways of describing out-of-equilibrium (OFQ) systems: through kinetic theories and stochastic theories.

Kinetic theories make use of something called _coarse graining_, which can be understood as a way to systematically use approximations in order to describe the system, controlling how much information we need - or want - to add to our model and how much we leave out. Therefore, there's control of its complexity and we can be sure about what we are leaving out. An analogy would be expanding some function into a Taylor series and truncating it according to what the situation requires of us. Examples of kinetic theories and coarse graining descriptions include:

- _The Boltzmann Equation_. This equation gives us the time evolution of the position and velocity __distributions__ of particles (from a gas) and it is more appropriate to describe diluted systems, where interactions are short range in nature. We will talk more about this equation soon.
- _The Vlasov Equation_. Used to describe quasi-neutral[^1] plasma and more appropriate for long-range interactions (in this case, the eletromagnetic interaction).

Stochastic theories allows to construct probabilistic models, usually inspired in the Brownian motion. In the stochastic approach we will see the Langevin Equation, the Fokker-Planck equation and the master equation with some applications. 

Now, our entry point will be the Boltzmann equation, and in these lectures we will see two ways of deriving it. One is more phenomenological, and the other more formal[^2]. We will start with the former, so we can have more physical insight into what is going on.

To arrive at the Boltzmann equation we start with the following assumptions:

1. The system is a dilute gas.
2. Particles interact only during collisions. 
3. (for simplicity) The gas is composed of only one type of particle, each of which with mass $m$.
4. The system is finite with ideal walls which reflect particles as if in an elastic collision. We can also consider a system with an infinite number of particles, but we may require that in the thermodynamic limit the density is finite and constant: $N/V = \mathrm{constant}$.
5. The system is under a force $\vec{F}(\vec{r}, t)$ which, for simplicity, we assume it does not depend on the velocity of particles (for the Lorentz force this assumption does not hold, since this force does depend on the velocity of particles).

<a name="fig1"></a>

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_1.jpg" style="zoom:15%;" /></p>

__Fig. 1__: _Representation of a gas made up of $N$ particles in a volume $V$_.

Some remarks on the first and second assumptions are in order:

__First Assumption__. We can think of a dilute gas ([Fig.1 above](#fig1)) as a system of low density.  More formally, the gas is dilute when the average distance between particles is much greater than their sizes: $d \gg \lambda$. First, let $v$ be the specific volume of the gas. Then,
$$
\begin{aligned}
v &= \frac{V}{N} = \left(\frac{N}{V} \right)^{-1}= n^{-1}.
\end{aligned}
$$

The cubic distance between particles is proportional to $n$, so $ d \sim v^{\frac{1}{3}} \sim n^{-\frac{1}{3}}$. We can describe this distance with the De Broglie wavelength

$$
\lambda_{B} = \frac{h}{p} = \frac{h}{\sqrt{2 m E}}.
$$

Recall that $\langle E \rangle = 3 k T/2$, then 

$$
\lambda_{B} = \frac{h}{\sqrt{3 m k T}}.
$$

So the dilute gas condition ($d \gg \lambda_{B}$) can be rewritten as 

$$
n^{-\frac{1}{3}} \gg \frac{h}{\sqrt{3 m k T}}.
$$

We can also characterize this gas condition in terms of the _thermal wavelength_ $\lambda = h/(\sqrt{2 \pi m k T})$. Since $\lambda$ is of the same order as $\lambda_{B}$ then $n^{-\frac{1}{3}} \gg \lambda$. Therefore, our first assumption can be translated as 

$$
\lambda_{B}^{3} n \ll 1, \; \text{or} \; \lambda^{3} n \ll 1.
$$

We can use this condition to characterize the dilute gas as well as the classical regime.

__Second assumption__. Since we have a dilute gas or low density of particles, those particles move as free particles. Only for short time intervals they interact with each other, that is, they collide. The nature of collisions is determined by what is called _cross section_, which will see in more detail later on.

# 1.2 Phase Space and the Distribution Function 

[Back to Contents](#contents)

The phase space (also denoted $\mu$ _space_) has $6$ dimensions, $3$ of which are the position coordinates and the remaining $3$ describe the momenta coordinates (or equivalently velocities), for each particle/molecule. A point in this space represents the dynamic state of a particle/molecule. For $N$ particles or molecules, the state of the system is represented by $N$ points in this space. The state is completely determined by the position and momenta coordinates. A representation of this space can be seen in the figure below:

<a name="fig2"></a>

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_2.jpg" alt="figura" style="zoom:25%;" /></p>

__Fig. 2__: _Representation of a gas made up of $N$ particles in a volume $V$_.

We now define a _distribution function_ $f$ in this space such that $f(\vec{r}, \vec{p}, t)d^{3}r d^{3}p$ is the number of particles in time $t$ that are within the 'position volume' $d^{3}r$ around $\vec{r}$ and 'momenta volume' $d^{3}p$ around $\vec{p}$, where $d^{3}r \equiv d r_{1} d r_{2} d r_{3} \equiv r_{x} r_{y} r_{z}$, and the same for the momenta.

<a name="fig3"></a>

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_3.jpg" alt="function_phase_space" style="zoom:25%;" /></p>

__Fig. 3__: _Distribution function and number of points in phase space_.

On the distribution function we make two assumptions: that there are usually a huge number of particles in the volume element $d^{3}r d^{3}p$ and the density of points varies smoothly. This means we are assuming $f(\vec{r}, \vec{p}, t)$ is a continuous function in its arguments[^3]. 

The goal of _Kinetic Theory_ is to find the distribution function $f$. This function depends on time because particles constantly enter and leave a given volume element in phase-space. It also depends on the problem at hand: the type of interactions between the particles, initial conditions, boundary conditions, etc. 

The distribution function can be determined by the **Boltzmann Equation** (its equation of motion), and so when we solve this equation we are effectively finding what the distribution function is. 

With the distribution function we can find the ensemble average of the physical quantities we are interested in. As an example, let $\chi (\vec{r}, \vec{v}, t) = m \vec{v}^{2}/2$. Then, its average in time $t$ and position $\vec{r}$ is obtained by integration over velocities:
$$
\langle \chi (\vec{r}, t) \rangle = \frac{\int d^{3} v \chi (\vec{r}, \vec{v}, t) f(\vec{r}, \vec{v}, t)}{\int d^{3} v f(\vec{r}, \vec{v}, t)},
$$

where we assumed that $f$ is already normalized. The denominator is the number of particles in the phase space volume element $d^{3}r d^{3}v$ . We may denote

$$
n(\vec{r}, t) = \int d^{3} v f(\vec{r}, \vec{v}, t)
$$

so $n(\vec{r}, t)$ is the number of particles per unit volume around $\vec{r}$ at time $t$. Then,


$$
\langle \chi (\vec{r}, t) \rangle = \frac{m}{2 n(\vec{r}, t)} \int d^{3} v \; \vec{v}^{2} f(\vec{r}, \vec{v}, t)
$$

and the average will be determined by $f$.

# 1.3 Deriving the Boltzmann Equation

[Back o Contents](#contents)

Let $d^{3} r d^{3}v$ be the volume element in the $\mu$ space of our system. Now, suppose there are no collisions between particles. In a later instant in time $t' = t+ dt$ the molecules move due to the external force and end up in another position $(\vec{r}', \vec{v}')$ as illustrated in the figure below:

<a name="fig4"></a>

<img src="/notes/stats_mech_ii/imgs_chap1/img_1_4.jpg" style="zoom:67%;" />

__Fig. 4__: _Volume elements under some external force at times $t$_ and $t+ dt$.

This motion is determined by the initial conditions and by the force applied to the system. That way, we may write

<a name="eq1"></a>

$$
\begin{aligned}
\vec{r}' &= \vec{r} + \dot{\vec{r}}dt = \vec{r} + \vec{v} dt, \\
\vec{v}' & = \vec{v} + \dot{\vec{v}} dt = \vec{v} + \frac{\vec{F}}{m} dt. \qquad (1)
\end{aligned}
$$

We can show that both volume elements are equal, that is, $d^{3}r d^{3} v = d^{3}r' d^{3} v'$. As a matter of fact, the relationship between the two is given by

$$
d^{3} r' d^{3} v ' = | \; J \; | d^{3} r d^{3} v,
$$

where $J$ is the Jacobian of the transformation between the coordinates $(\vec{r}, \vec{v})$ and $(\vec{r}', \vec{v}')$. At first order in time the Jacobian is equal to $1$ and then the volume elements are equal. This is showed in the exercises section.

All molecules that were initially at $d^{3}r d^{3}v$ will be at $d^{3} r' d^{3} v'$. This is due to the fact that the initial conditions of very close particles in a volume element are similar, that all particles are subjected to the same external force and that there are no collisions. Since __all__ molecules move to the new volume element, the distribution functions are the same:

$$
f( \vec{r}, \vec{v}, t) d^{3} r d^{3} v = f(\vec{r}', \vec{v}', t) d^{3} r' d^{3} v' \implies f( \vec{r}, \vec{v}, t) = f( \vec{r}', \vec{v}', t).
$$

Using [(1)](#eq1) we can write

$$
f (\vec{r}, \vec{v}, t) = f\left(\vec{r} + \vec{v} dt, \vec{v} + \frac{\vec{F}}{m}dt, t + dt\right).
$$

When there are collisions not all molecules from $d^{3} r d^{3} v$ will move to $d^{3}r' d^{3}v'$ and then there'll be a term stemming from collisions which, fairly enough, we call the _collision term_. 

To have some idea of what happens when we deal with collisions let us consider molecules that have similar velocities and are under the same external force. Due to the collision there is going to be a significant change in their positions and velocities. They may not end up in the volume $d^{3} r' d^{3} v'$ centered at $(\vec{r}', \vec{v}')$. Furthermore, we may have molecules that initially were at a different volume element (one not centered in $(\vec{r}, \vec{v})$) but ended up in $d^{3} r' d^{3} v'$ anyway. This is illustrated in the figure below:

<a name="fig5"></a>

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_5.jpg" style="zoom:33%;" /></p>

__Fig. 5__: _Possible collisions_.



With that in mind we may write
$$
f (\vec{r}, \vec{v}, t) \neq f\left(\vec{r} + \vec{v} dt, \vec{v} + \frac{\vec{F}}{m}dt, t + dt\right).
$$

This difference of the distributions functions due to collisions is what we call the collision term. It is a constant and we define it, for now, as a partial derivative:

$$
\underbrace{\left( \frac{\partial f}{\partial t} \right)_{\mathrm{Coll.}}}_{\equiv C} dt.
$$

Therefore,

<a name="eq2"></a>
$$
f \left( \vec{r} + \vec{v} dt, \vec{v} + \frac{\vec{F}}{m} dt, t+ dt \right) - f(\vec{r}, \vec{v}, t) = \left( \frac{\partial f}{\partial t} \right)_{\mathrm{coll}} dt \qquad(2)
$$

This definition of the collision term as a partial derivative is due to historical reasons. Other texts just call it $C$. Either way, note that we must have units of $f$ on the right side of [(2)](#eq2).

We'll expand the distribution function above in a Taylor series. Recall that the Taylor series expansion at **first order** for $n$ variables around the point $(a_{1}, \cdots, a_{n})$ is given by

$$
\begin{aligned}
f(x_{1}, \cdots, x_{n}) & \approx f(a_{1}, \cdots, a_{n}) \; +  \\
&\sum_{i=1}^{n} \frac{\partial}{\partial x_{i}} f(a_{1}, \cdots, a_{n})(x_{i} - a_{i}).
\end{aligned}
$$

For more info on this see [here](https://math.jhu.edu/~lindblad/211/l9.pdf) and [here](https://en.wikipedia.org/wiki/Taylor_series#Taylor_series_in_several_variables). In our case we have $6N$ variables, where $3N$ are for positions and $3N$ for momenta. The expansion is around the point $(\vec{r}, \vec{v}, t)$: 

$$
\begin{aligned}
& f\left( \vec{r} + \vec{v} dt, \vec{v} + \frac{\vec{F}}{m} dt, t+ dt \right) \approx f(\vec{r}, \vec{v}, t) + \sum_{i=1}^{3N} \frac{\partial}{\partial x_{i}} f(\vec{r}, \vec{v}, t) (\vec{r} + \vec{v}dt - \vec{r}) \\
& + \sum_{j=1}^{3N} \frac{\partial}{\partial v_{j}} f(\vec{r}, \vec{v}, t)\left( \vec{v} + \frac{\vec{F}}{m} dt - \vec{v} \right) + \frac{\partial}{\partial t} f(\vec{r}, \vec{v}, t)(t + dt - t)\\
& = f(\vec{r}, \vec{v}, t) + \sum_{i=1}^{3N} \frac{\partial}{\partial x_{i}} f(\vec{r}, \vec{v}, t) \vec{v}dt + \sum_{j=1}^{3N} \frac{\partial}{\partial v_{j}} (\vec{r}, \vec{v}, t) \frac{\vec{F}}{m}dt + \frac{\partial}{\partial t} f(\vec{r}, \vec{v}, t)dt \\
& = f(\vec{r}, \vec{v}, t) + \nabla_{r}f \cdot \vec{v} dt + \nabla_{v} f \cdot \frac{\vec{F}}{m}dt + \frac{\partial}{\partial t} f(\vec{r}, \vec{v}, t)dt,
\end{aligned}
$$

where we have kept only first order terms of the expansion. Replacing this into [(2)](#eq2) we get

$$
\frac{\partial}{\partial t}f + \nabla_{r} f \cdot \vec{v} + \nabla_{v} f \cdot \frac{\vec{F}}{m} = \left(\frac{\partial f}{\partial t} \right)_{\mathrm{Coll.}}.
$$

Now, the dot product of gradients of $f$ with vectors is commutative, that is,  

$$
\nabla_{r}f \cdot \vec{a} = \vec{a} \cdot \nabla_{r} f \; \text{and} \; \nabla_{v}f \cdot \vec{a} = \vec{a} \cdot \nabla_{v} f
$$

for any vector $\vec{a} \in \mathbb{R}^{n}$.  Commutation can be seen by writing the dot product explicitly:

$$
\begin{aligned}
\nabla_{r} f \cdot \vec{a} & = \frac{\partial f }{\partial x} a_{x} + \frac{\partial f}{\partial y} a_{y} + \frac{\partial f}{\partial z} a_{z} \\
& = a_{x} \frac{\partial f}{\partial x} + a_{y} \frac{\partial f}{\partial y} + a_{z} \frac{\partial f}{\partial z}\\
& = \vec{a} \cdot \nabla_{r} f
\end{aligned}
$$

This way we can factor $f$ out and then we have the Boltzmann equation: 

$$
\begin{aligned}
\left( \frac{\partial}{\partial t} + \vec{v} \cdot \nabla_{r} + \frac{\vec{F}}{m}  \cdot \nabla_{v}\right) f(\vec{r}, \vec{v}, t) = \left(\frac{\partial f}{\partial t} \right)_{\mathrm{Coll.}}. \qquad(3)
\end{aligned}
$$

We can also write the Boltzmann equations in terms of the momenta. Just note that $p_{i} = m v_{i}$, so

$$
\nabla_{v} f \cdot \frac{F}{m} = \frac{\vec{F}}{m} \cdot \nabla_{v} f = F_{i} \frac{1}{m} \frac{\partial f}{\partial v_{i}} = F_{i} \frac{\partial f}{\partial (m v_{i})} = F_{i} \frac{\partial f}{\partial p_{i}} = \vec{F} \cdot \nabla_{p}.
$$

Therefore,

$$
\begin{aligned}
\left( \frac{\partial}{\partial t} + \vec{v} \cdot \nabla_{r} + \vec{F}  \cdot \nabla_{p}\right) f(\vec{r}, \vec{p}, t) = \left(\frac{\partial f}{\partial t} \right)_{\mathrm{Coll.}}. \qquad(4)
\end{aligned}
$$

However, note that we __do not__ have an expression for the collision term just yet. We did nothing more than just state that there is a difference between the distribution functions and worked it out from there. Next we derive the expression for the collision term.

# 1.4 The Collision Term

[Back to Contents](#contents)

To fully derive the Boltzmann Equation we need to determine the collision term. The collision term is the (net) number of particles in a given (phase space) volume element  $d^{3}r d^{3}p$ due to collisions: some of these particles entered the volume and some escaped it. Let us denote the number of particles that enter and escape $d^{3}r d^{3}p$ due to collisions as $\overline{R}$ and $R$, respectively. Therefore we can write

$$
\left( \frac{\partial f}{\partial t} \right)_{\mathrm{Coll.}} dt = (\overline{R} - R)dt.
$$

An illustration of $R$ and $\overline{R}$ can be seen below:

<a name="fig6"></a>
<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_6.jpg" style="zoom: 80%;" /></p>

Now, the volume element is so small (infinitesimal) that any collision will shoot the particle out of that element. So if a particle gets out of that volume element we can infer that there was a collision. That way, the number of particles that escape the volume element, $R$, is directly related to the number of collisions:

- $Rdt d^{3} d^{3}p$:  the number of collisions taking place between $t$ and $t + dt$ in which one of the particles was initially at $d^{3}r d^{3}p$.

The number of collisions originally outside the volume element that shoots one of the particles to $d^{3}r d^{3}p$ is $\overline{R}$ (the particle has its final phase space in that volume element). Therefore,

- $\overline{R}dtd^{3}d^{3}p$: the number of collisions taking place between $t$ and $t+dt$, in which one of the particles has a final state in $d^{3} d^{3}p$.

Also note that for collisions to happen we need particles to be close to each other, regardless of their momenta. In phase space, this means for them to be in the same vertical strip

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_7.png" style="zoom:33%;" /></p>

As for the collisions themselves we assume the following:

- Rarified (low density) gas: collisions take place among **pairs** of particles,
- During collisions, the net effect of external forces on the particles is negligible compared to the forces that act between the particles.

In the first assumption we are ignoring triple and more particles collisions. At least we consider them to be extremely rare.

In the second assumption we also mean the length scale on which the force acts, $L$, is much greater than the distance where the collision happens $d$, that is, the distance between the particles. On such a short scale the external force varies little and so we may regard it as constant and, therefore, in the collision range $d$ there won't be a significant change in the particles potential energies nor a significant contribution to their momenta due to the external force:

<p style="text-align:center;"><img src="/notes/stats_mech_ii/imgs_chap1/img_1_8.png" width="50%" height="auto"/></p>

By conservation of momentum we have $$m \vec{v}_{1} + m \vec{v}_{2} = \vec{P} = \mathrm{constant}$$ . Defining the relative velocity by $$\vec{V} \equiv  \vec{v}_{1} - \vec{v}_{2}$$ we  can write the velocities of each particle as


$$
\begin{aligned}
\vec{v}_{1} &= \vec{c} + \frac{\mu}{m_{1}} \vec{V}, \\
\vec{v}_{2} &= \vec{c} + \frac{\mu}{m_{2}} \vec{V},
\end{aligned}
$$


where


$$
\begin{aligned}
\vec{c} &= \frac{\vec{P}}{m_{1} + m_{2}} = \frac{m_{1} \vec{v}_{1} + m_{2} \vec{v}_{2}}{m_{1} + m_{2}} ,\\
\mu &= \frac{m_{1} m_{2}}{m_{1} + m_{2}}
\end{aligned}
$$


are the *center of mass velocity* and *reduced mass*, respectively. During collisions the velocity $$\vec{c}$$ remains unchanged, while in general the relative velocity may change. With this new set of variables, the total kinetic energy is given by


$$
K = \frac{1}{2} m_{1} v_{1}^{2} + \frac{1}{2} m_{2} v_{2} = \frac{1}{2} (m_{1} + m_{2}) \vec{c}^{2} + \frac{1}{2} \mu \vec{V}^{2}.
$$


In an elastic collision kinetic energy is conserved: $K=K'$ . Since the center of mass and reduced mass do not change during the collision, we have, from the expression for the kinetic energy above,


$$
\vec{V}^{2} = \vec{V}'^{2} \implies | \vec{V} | = | \vec{V}' |
$$

for initial velocities $$\vec{v}_{1}, \vec{v}_{2}$$ and final velocities $$\vec{v}'_{1}, \vec{v}'_{2}$$. 

Although the absolute value of the relative velocity is the same, $\vec{V}$ may change direction after the collisison. Since direction is the only variable here, we can use angles between $\vec{V}$ and $\vec{V}^{\prime}$ to describe the collisions.



# 1.5 Scattering 

[Back to Contents](#contents)





---
# Footnotes

[^1]: Quasi-neutrality means that the system as a whole has zero net charge but locally it has regions that are not neutral.

[^2]: The formal derivation starts with the Liouville equation for a system with many particles (for example $\sim 10^{23}$). We then work with these Liouville equations (one for each particle) and get to the point where we have a hierarchy of equations denoted _BBGKY Hierarchy_. Both the Boltzmann equation and the Vlasov equation can be obtained from this hierarchy, but we'll see them in due time.

[^3]: A more rigorous way would be to consider that $f$ describe point particles and so can be described as a sequence of Dirac deltas.
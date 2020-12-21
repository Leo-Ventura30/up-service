export default function mountLink(user) {
  const textZap = `Olá ${user.nome}, só passando para confirmar o seu agendamento para o dia ${user.dia} as ${user.hora}`;
  const linkZap = `https://wa.me/5511${user.number}?text=${textZap}&app_absent=1`;
  return linkZap;
}
